// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../Components/Navbar/Navbar";
// import FooterCA from "../Components/FooterCA/FooterCA";
// import BottomFooter from "../Components/BottomFooter/BottomFooter";
// import "./Style/VerifyDonation.css"; // 👈 import the CSS

// const VerifyDonation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState("verifying");

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const reference = query.get("reference"); // Paystack appends ?reference=xxxx

//     if (reference) {
//       axios
//         .get(`http://localhost:5173/api/donate/verify/${reference}`)
//         .then((res) => {
//           if (res.data.success && res.data.donation.status === "success") {
//             setStatus("success");
//           } else {
//             setStatus("failed");
//           }
//         })
//         .catch(() => setStatus("failed"));
//     } else {
//       setStatus("failed");
//     }
//   }, [location]);

//   return (
//     <>
//       <Navbar />
//       <div className="verify-wrapper">
//         {status === "verifying" && <h2 className="verifying">Verifying your payment...</h2>}
//         {status === "success" && (
//           <h2 className="success">🎉 Thank you! Your donation was successful.</h2>
//         )}
//         {status === "failed" && (
//           <h2 className="failed">❌ Payment failed or could not be verified.</h2>
//         )}

//         {/* Back to Home Button */}
//         {status !== "verifying" && (
//           <button className="back-btn" onClick={() => navigate("/")}>
//             ⬅ Back to Home
//           </button>
//         )}
//       </div>
//       <FooterCA />
//       <BottomFooter />
//     </>
//   );
// };

// export default VerifyDonation;
