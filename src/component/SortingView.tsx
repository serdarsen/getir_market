import {
  selectProduct,
  setSortOption,
  useAppDispatch,
  useAppSelector,
} from "../context";
import Card from "./Card";
import Radio from "./Radio";

const SortingView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sortOption } = useAppSelector(selectProduct);

  const onChange = (
    order: string,
    field: string,
  ): void => {
    dispatch(setSortOption({ order, field }));
  };

  return (
    <div className="flex
                    h-[13rem]
                    w-[18.5rem]
                    flex-col
                    gap-[0.75rem]"
    >
      <p className="text-custom-gray-500
                    text-start
                    text-sm"
      >
        Sorting
      </p>
      <Card>
        <div className="flex
                        h-[11.5rem]
                        w-[18.5rem]
                        flex-col
                        gap-[1rem]
                        p-[1.5rem]"
        >
          <Radio
            id="sortingViewRadioId1"
            name="sortingViewRadioName1"
            text="Price low to high"
            checked={sortOption[0] === "asc" && sortOption[1] === "price"}
            onChange={() => onChange("asc", "price")}
          />
          <Radio
            id="sortingViewRadioId2"
            name="sortingViewRadioName2"
            text="Price high to low"
            checked={sortOption[0] === "desc" && sortOption[1] === "price"}
            onChange={() => onChange("desc", "price")}
          />
          <Radio
            id="sortingViewRadioId3"
            name="sortingViewRadioName3"
            text="New to old"
            checked={sortOption[0] === "asc" && sortOption[1] === "added"}
            onChange={() => onChange("asc", "added")}
          />
          <Radio
            id="sortingViewRadioId4"
            name="sortingViewRadioName4"
            text="Old to new"
            checked={sortOption[0] === "desc" && sortOption[1] === "added"}
            onChange={() => onChange("desc", "added")}
          />
        </div>
      </Card>
    </div>
  );
};

export default SortingView;
