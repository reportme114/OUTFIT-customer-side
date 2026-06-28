import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
export default function Address() {
const [editingAddress, setEditingAddress] = useState(false);
const [address, setAddress] = useState({
  fullName: "",
  phone: "",
  house: "",
  area: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
});
useEffect(() => {
  loadAddress();
}, []);
const loadAddress = async () => {
  if (!auth.currentUser) return;

  const snap = await getDoc(
    doc(db, "users", auth.currentUser.uid)
  );

  if (snap.exists() && snap.data().address) {
    setAddress(snap.data().address);
  }
};

const saveAddress = async () => {
  await setDoc(
    doc(db, "users", auth.currentUser.uid),
    {
      address,
    },
    { merge: true }
  );

  setEditingAddress(false);
  alert("Address saved successfully");
};

return (
  <div>
    <h2>Saved Address</h2>

    {editingAddress ? (
      <>
        <input
          className="input"
          placeholder="Full Name"
          value={address.fullName}
          onChange={(e) =>
            setAddress({ ...address, fullName: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Phone"
          value={address.phone}
          onChange={(e) =>
            setAddress({ ...address, phone: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="House / Flat"
          value={address.house}
          onChange={(e) =>
            setAddress({ ...address, house: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Area"
          value={address.area}
          onChange={(e) =>
            setAddress({ ...address, area: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="City"
          value={address.city}
          onChange={(e) =>
            setAddress({ ...address, city: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="State"
          value={address.state}
          onChange={(e) =>
            setAddress({ ...address, state: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Pincode"
          value={address.pincode}
          onChange={(e) =>
            setAddress({ ...address, pincode: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Landmark"
          value={address.landmark}
          onChange={(e) =>
            setAddress({ ...address, landmark: e.target.value })
          }
        />

        <button className="btn" onClick={saveAddress}>
          Save Address
        </button>
      </>
    ) : (
      <div className="account__order">
        <div>
          <strong>{address.fullName}</strong>
          <span>
            {address.house}, {address.area}, {address.city},
            {address.state} - {address.pincode}
          </span>
        </div>

        <button
          className="btn btn--ghost"
          onClick={() => setEditingAddress(true)}
        >
          Edit
        </button>
      </div>
    )}
  </div>
);
}