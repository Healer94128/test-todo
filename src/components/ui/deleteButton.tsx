import {remove} from '@/constant'

const DeleteButton = () => {
    return(
        <div className="w-[62px] h-8 bg-grey-500">
            <span className='text-white'>{remove}</span>
        </div>
    );
}

export default DeleteButton;