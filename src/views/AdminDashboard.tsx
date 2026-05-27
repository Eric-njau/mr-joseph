import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Plus, Trash2, LogOut, Video, MapPin, CheckCircle, Image as ImageIcon } from 'lucide-react';

interface CarFormData {
  make: string;
  model: string;
  year: number;
  price: number;
  spec: string;
  features: string[];
  location: string;
  image: string;
  videoUrl: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authError, setAuthError] = useState('');

  const [inventory, setInventory] = useState<any[]>([]);
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [featureInput, setFeatureInput] = useState('');

  const [formData, setFormData] = useState<CarFormData>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    spec: '',
    features: [],
    location: '',
    image: '',
    videoUrl: ''
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        if (u.uid === 'gvoiAzFiyFa3dn54CXtyR73za4h1') {
          setUser(u);
          fetchInventory();
        } else {
          await signOut(auth);
          setUser(null);
          setAuthError('Unauthorized access: Admin only.');
        }
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  const fetchInventory = async () => {
    try {
      const snap = await getDocs(collection(db, 'cars'));
      setInventory(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching inventory", error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setAuthError(err.message || 'Failed to login');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("Image is too large. Please select an image under 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      // Compress the image before setting it to base64
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          setFormData(prev => ({ ...prev, image: dataUrl }));
        }
      };
      if (event.target?.result) {
        img.src = event.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  };

  const addFeature = () => {
    if (featureInput.trim() && !formData.features.includes(featureInput.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.make || !formData.model || !formData.image) {
      alert("Make, Model, and Image are required!");
      return;
    }

    setIsSaving(true);
    try {
      await addDoc(collection(db, 'cars'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsAddingMode(false);
      setFormData({
        make: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        spec: '',
        features: [],
        location: '',
        image: '',
        videoUrl: ''
      });
      fetchInventory();
    } catch (error: any) {
      console.error(error);
      alert("Error saving vehicle." + error?.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;
    try {
      await deleteDoc(doc(db, 'cars', id));
      fetchInventory();
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 border-t border-[var(--color-base)]/10">
        <div className="w-full max-w-sm bg-[var(--color-obsidian)] p-8 rounded-2xl border border-[var(--color-base)]/10 shadow-2xl relative z-10">
          <h2 className="text-3xl font-serif text-white mb-6 tracking-tight text-center">Admin Portal</h2>
          {authError && <div className="text-red-400 mb-4 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/20">{authError}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-colors mt-2"
            >
              {isLoggingIn ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-obsidian)] relative z-10 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-serif text-white tracking-tight">Inventory Management</h1>
            <p className="text-white/50 mt-2">Add, edit, or remove prestige vehicles from your showroom.</p>
          </div>
          <div className="flex gap-4">
            {!isAddingMode && (
              <button
                onClick={() => setIsAddingMode(true)}
                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                <Plus size={18} />
                Add Vehicle
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white/5 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>

        {isAddingMode ? (
          <div className="bg-[#151515] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Add New Vehicle</h2>
              <button 
                onClick={() => setIsAddingMode(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                Discard
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Make</label>
                  <input type="text" required value={formData.make} onChange={e => setFormData({...formData, make: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="e.g. Rolls-Royce" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Model</label>
                  <input type="text" required value={formData.model} onChange={e => setFormData({...formData, model: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="e.g. Phantom" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Year</label>
                  <input type="number" required value={formData.year} onChange={e => setFormData({...formData, year: parseInt(e.target.value)})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Price (USD)</label>
                  <input type="number" required value={formData.price} onChange={e => setFormData({...formData, price: parseInt(e.target.value)})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Key Specification Highlight</label>
                <input type="text" value={formData.spec} onChange={e => setFormData({...formData, spec: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="e.g. 6.75L Twin-Turbocharged V12" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2"><MapPin size={14}/> Location</label>
                  <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="e.g. Mayfair, London" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2"><Video size={14}/> Video Review URL (Optional)</label>
                  <input type="url" value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="https://youtube.com/..." />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Features & Options</label>
                <div className="flex gap-2 mb-3">
                  <input 
                    type="text" 
                    value={featureInput} 
                    onChange={e => setFeatureInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addFeature(); } }}
                    className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                    placeholder="e.g. Starlight Headliner" 
                  />
                  <button type="button" onClick={addFeature} className="px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feat, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/90">
                      {feat}
                      <button type="button" onClick={() => removeFeature(idx)} className="hover:text-red-400"><Trash2 size={14} /></button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2"><ImageIcon size={14}/> Vehicle Photograph</label>
                <div className="mt-2 border-2 border-dashed border-white/20 rounded-xl p-8 text-center bg-black/20 hover:bg-black/40 transition-colors relative">
                  {!formData.image ? (
                    <div className="flex flex-col items-center gap-3">
                      <ImageIcon className="w-8 h-8 text-white/30" />
                      <span className="text-white/50 text-sm">Click to upload a high-resolution photo</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required 
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <img src={formData.image} alt="Preview" className="h-32 object-contain rounded-lg border border-white/10" />
                      <button type="button" onClick={() => setFormData({...formData, image: ''})} className="text-sm text-white/50 hover:text-white">Remove Photo</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-right">
                <button type="submit" disabled={isSaving} className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50">
                  {isSaving ? 'Publishing...' : 'Publish to Showroom'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventory.length === 0 ? (
              <div className="col-span-full py-16 text-center text-white/30 border border-dashed border-white/10 rounded-2xl">
                No vehicles in inventory. Click "Add Vehicle" to begin.
              </div>
            ) : (
              inventory.map((car) => (
                <div key={car.id} className="group bg-[#151515] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors flex flex-col">
                  <div className="h-48 bg-black/50 p-6 flex items-center justify-center relative overlow-hidden">
                    <img src={car.image} alt={`${car.make} ${car.model}`} className="max-h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl text-white">{car.make} <span className="italic opacity-80">{car.model}</span></h3>
                      <button onClick={() => handleDelete(car.id)} className="text-white/30 hover:text-red-400 transition-colors p-1" title="Remove Vehicle">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="text-sm text-white/50 font-mono mb-4">
                      {car.year} • ${car.price?.toLocaleString()}
                    </div>
                    {car.location && <div className="text-xs text-white/40 flex items-center gap-1.5 mt-auto"><MapPin size={12}/> {car.location}</div>}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
