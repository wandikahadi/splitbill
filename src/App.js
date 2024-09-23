import React, { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setshowAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend(){
    setshowAddFriend((showAddFriend) => !showAddFriend)
    setSelectedFriend(null);
  }
  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
  }
  function handleSelectedFriend(friend){
    setSelectedFriend((selected)=>selected?.id==friend.id ? null : friend);
    setshowAddFriend(false);
  }
  function handleSplitBill(value){
    setFriends(
      friends.map((friend)=>{
        if(friend.id == selectedFriend?.id){
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    )
    setSelectedFriend(null);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} onSelected={handleSelectedFriend} selectedFriend={selectedFriend}/>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <button className='button' onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  )
}
