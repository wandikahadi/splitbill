export default function Friend({friend}) {
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
                Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
            </p>
        )}
    </li>
  )
}
