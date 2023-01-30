import {
  appendItemtypeFilter,
  removeItemtypeFilter,
  selectProduct,
  useAppDispatch,
  useAppSelector,
} from "../context";
import Countable from "../model/Countable";
import { useItemtypesQuery } from "../service";
import Chip from "./Chip";

const ItemtypeView: React.FC = () => {
  const dispatch = useAppDispatch();

  const { itemtypeFilter } = useAppSelector(selectProduct);
  const { data: itemtypes = [] } = useItemtypesQuery();

  const onChangeChip = (itemtypeName: string): void => {
    if (itemtypeFilter.includes(itemtypeName)) {
      dispatch(removeItemtypeFilter(itemtypeName));
    } else {
      dispatch(appendItemtypeFilter(itemtypeName));
    }
  };

  return (
    <div className="mb-[1rem]
                    inline-flex
                    flex-wrap
                    gap-[0.5rem]"
    >
      {itemtypes.map((itemtype: Countable) => (
        <Chip
          id={`chipId${itemtype.name}`}
          key={`chipKey${itemtype.name}`}
          name={`chipName${itemtype.name}`}
          checked={itemtypeFilter.includes(itemtype.name)}
          onChange={() => onChangeChip(itemtype.name)}
        >
          {itemtype.name}
        </Chip>
      ))}
    </div>
  );
};

export default ItemtypeView;
