export default function Friend({friend, onSelected}) {
  return (
    <li>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
            <p className="red">
                Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
            </p>
        )}
        {friend.balance > 0 && (
            <p className="green">
                Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
            </p>
        )}
        {friend.balance == 0 && (
            <p>
                Kamu dan {friend.name} tidak ada hutang
            </p>
        )}
        <button className="button" onClick={()=>onSelected(friend)}>Pilih</button>
    </li>
  )
}
