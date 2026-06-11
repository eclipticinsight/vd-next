"use client";

import { useEffect, useState } from "react";
import { API } from "@/utils/api";

// Define the Offer type
interface Offer {
  _id: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  validUntil?: string;
  features: string[];
}

interface OfferFormData {
  title: string;
  description: string;
  price: string;
  discount: string;
  validUntil: string;
  features: string[];
}

export default function AdminOffers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState<OfferFormData>({
    title: "",
    description: "",
    price: "",
    discount: "",
    validUntil: "",
    features: [""]
  });


  const fetchOffers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await API.get("/offers");
      const data = response.data;

      if (Array.isArray(data)) {
        setOffers(data);
      } else if (Array.isArray(data.offers)) {
        setOffers(data.offers);
      } else {
        setOffers([]);
      }
    } catch (err: any) {
      console.error("Error fetching offers:", err);
      setError(err?.message || err || "Failed to fetch offers");
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const deleteOffer = async (id: string) => {
    const confirmDelete = window.confirm("Delete this offer?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/offers/${id}`);
      await fetchOffers();
    } catch (err: any) {
      console.error("Error deleting offer:", err);
      alert(err?.message || err || "Error deleting offer");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: updatedFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ ...prev, features: [...prev.features, ""] }));
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        discount: formData.discount ? parseFloat(formData.discount) : undefined,
        validUntil: formData.validUntil || null,
        features: formData.features.filter(f => f.trim() !== "")
      };

      if (editingOffer) {
        await API.put(`/offers/${editingOffer._id}`, payload);
      } else {
        await API.post("/offers", payload);
      }

      await fetchOffers();
      closeForm();
    } catch (err: any) {
      console.error("Error saving offer:", err);
      alert(err?.message || err || "Error saving offer");
    }
  };

  const handleEdit = (offer: Offer) => {
    setEditingOffer(offer);
    setFormData({
      title: offer.title || "",
      description: offer.description || "",
      price: offer.price?.toString() || "",
      discount: offer.discount?.toString() || "",
      validUntil: offer.validUntil ? offer.validUntil.split('T')[0] : "",
      features: offer.features?.length ? offer.features : [""]
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingOffer(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      discount: "",
      validUntil: "",
      features: [""]
    });
  };

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center p-8 text-white">
        <div className="text-white">Loading offers...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 text-white">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Offers Management</h1>
          <p className="text-white/60 mt-2">Manage all offers and pricing plans</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          + Create Offer
        </button>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
          Error: {error}
        </div>
      )}

      {/* OFFERS GRID */}
      {offers.length === 0 ? (
        <div className="bg-[#091548] rounded-2xl p-12 text-center border border-white/10">
          <p className="text-white/60">No offers found. Create your first offer!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="bg-[#091548] rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <h2 className="text-2xl font-bold mb-3">{offer.title || "Offer"}</h2>
              <p className="text-white/60 mb-4">{offer.description || "No description"}</p>

              {/* Price section */}
              <div className="mb-4">
                <p className="text-3xl font-bold text-purple-400">${offer.price || 0}</p>
                {offer.discount && (
                  <p className="text-sm text-green-400 mt-1">
                    {offer.discount}% discount
                  </p>
                )}
              </div>

              {/* Features list */}
              {offer.features && offer.features.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm text-white/60 mb-2">Features:</p>
                  <ul className="space-y-1">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <span className="text-purple-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Valid until */}
              {offer.validUntil && (
                <p className="text-xs text-white/40 mb-4">
                  Valid until: {new Date(offer.validUntil).toLocaleDateString("en-IN")}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(offer)}
                  className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteOffer(offer._id)}
                  className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#091548] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#091548] border-b border-white/10 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {editingOffer ? "Edit Offer" : "Create New Offer"}
              </h2>
              <button
                onClick={closeForm}
                className="text-white/60 hover:text-white text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Offer Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="e.g., Premium Plan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Describe the offer..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Price *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Discount (%)</label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    step="1"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Valid Until</label>
                <input
                  type="date"
                  name="validUntil"
                  value={formData.validUntil}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Features</label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                      placeholder={`Feature ${index + 1}`}
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="bg-red-600/50 hover:bg-red-600 px-3 rounded-lg"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-purple-400 hover:text-purple-300 text-sm mt-2"
                >
                  + Add Feature
                </button>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {editingOffer ? "Update Offer" : "Create Offer"}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
