import React, { useEffect, useState } from 'react';

const UserVisaList = () => {
  const [userVisaData, setUserVisaData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user-visa-details')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserVisaData(data);
      });
  }, []);
  console.log(userVisaData)

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        
      {/* <h2 className="text-2xl font-bold mb-4">Visa Applications</h2>
      {userVisaData.length > 0 ? (
        userVisaData.map((user, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Country:</strong> {user.visaDetails.countryName}</p>
            <p><strong>Visa Type:</strong> {user.visaDetails.visaType}</p>
            <p><strong>Applied Date:</strong> {user.appliedDate}</p>
            <p><strong>Fee:</strong> ${user.fee}</p>
            <div>
              <h4 className="font-semibold">Required Documents:</h4>
              <ul className="list-disc list-inside ml-4">
                {user.visaDetails.requiredDocuments.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
            <img
              src={user.visaDetails.image}
              alt={user.visaDetails.countryName}
              className="w-full h-48 object-cover mt-4"
            />
          </div>
        ))
      ) : (
        <p>No visa applications found.</p>
      )} */}
    </div>
  );
};

export default UserVisaList;
