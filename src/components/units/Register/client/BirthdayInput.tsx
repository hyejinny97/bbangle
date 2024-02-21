import { getInputStyle } from '@/commons/utils';
import Input from '@/components/commons/inputs/Input';

function BirthdayInput() {
    return (
        <label className={getInputStyle()}>
            <div className="text-center">+ 추가하기</div>
            <Input type="hidden" />
        </label>
    );
}

export default BirthdayInput;
