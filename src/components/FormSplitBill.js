export default function FormSplitBill() {
  return (
    <form action="" className="form-add-friend">
        <h2>Patungan Bareng si X</h2>
        <label htmlFor="">💵Total Tagihan</label>
        <input type="text" name="" id=""/>
        <label htmlFor="">🙋‍♂️Tagihan Kamu</label>
        <input type="text" name="" id=""/>
        <label htmlFor="">🙋Tagihan X</label>
        <input type="text" name="" id=""/>
        <label htmlFor="">🤑Ditalangin sama</label>
        <select name="" id="">
            <option value="user">Kamu</option>
            <option value="friend">X</option>
        </select>
        <button className="button">Tambah Teman</button>  
    </form>
  )
}
