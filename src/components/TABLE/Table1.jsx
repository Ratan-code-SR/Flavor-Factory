

const Table1 = ({ item, index,handleRemoveButtonClick }) => {
    const { name, time, calories } = item;
    return (
        < >
            <div className="overflow-x-auto bg-[#f8f8f8] m-2 rounded-lg">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{name}</td>
                            <td>{time}</td>
                            <td>{calories}</td>
                            <td><button 
                            onClick={()=>handleRemoveButtonClick(item)}
                            className="btn btn-success rounded-full font-md">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table1;