import {UPDATE} from '@/constant'

const UpdateButton = () => {
    return(
        <div className="flex justify-center items-center w-[62px] h-8 bg-green m-auto rounded-[10px]">
            <span className='text-white'>{UPDATE}</span>
        </div>
    );
}

export default UpdateButton;