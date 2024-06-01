import { add } from '@/constant'

const AddButton = () => {
    return (
        <div className="w-[280px] h-10 rounded-[10px] bg-green m-auto">
            <span className='font-normal text-white leading-[22px] font-noto-sans'>{add}</span>
        </div>
    );
};

export default AddButton;