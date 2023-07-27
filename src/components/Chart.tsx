import List from './List';
import { useAppSelector } from '../hooks/redux';
import Summary from "./Summary";
import SaveButton from './SaveButton';
import PopupEdit from './PopupEdit';
import { RootState } from '../redux/store';
import { selectPopupEditState } from '../redux/todoSlice';

const Chart = () => {
    const popupEditState = useAppSelector((state: RootState) => selectPopupEditState(state))

    return (
        <>
            <List/>
            <SaveButton/>
            <Summary/>
            {popupEditState && <PopupEdit/>}
        </>
    );
};



export default Chart;