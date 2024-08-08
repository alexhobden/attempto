interface AddButtonProps {
    showAdd: (val: boolean) => void;
}

const AddButton: React.FC<AddButtonProps> = ({showAdd}) => {

    return(
        <button className="border-8 bg-green-200 border-green-800 h-20 w-20 rounded-xl font-poppins text-7xl text-center align-text-middle  text-green-800" onClick={() => showAdd(true)}>+</button>
    )
}

export default AddButton;