import React from "react";

function UserCard({ user }) {
  return (
    <div
      style={{
        backgroundColor:"grey",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <ul>
        <li>id : {user.id}</li>
        <li>name : {user.name}</li>
        <li>username : {user.username}</li>
        <li>email : {user.email}</li>
      </ul>
    </div>
  );
}

export default UserCard;
