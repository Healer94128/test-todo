import {update} from '@/constant'

const UpdateButton = () => {
    return(
        <div className="w-[62px] h-8 bg-grey-500">
            <span className='text-white'>{update}</span>
        </div>
    );
}

export default UpdateButton;