import {
  appendTagFilter,
  removeTagFilter,
  selectProduct,
  setTagSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../context";
import Countable from "../model/Countable";
import { useTagsQuery } from "../service";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Search from "./Search";

const TagView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tagSearchTerm, tagFilter } = useAppSelector(selectProduct);
  const { data: tags = [] } = useTagsQuery(tagSearchTerm);

  const onChangeCheckbox = (tagName: string): void => {
    if (tagFilter.includes(tagName)) {
      dispatch(removeTagFilter(tagName));
    } else {
      dispatch(appendTagFilter(tagName));
    }
  };

  const onSearch = (searchTerm: string):void => {
    dispatch(setTagSearchTerm(searchTerm));
  };

  return (
    <div
      className="
        flex
        h-[17rem]
        w-[18.5rem]
        flex-col
        gap-[0.75rem]"
    >
      <p
        className="
          text-custom-gray-500
          text-start
          text-sm
          dark:text-gray-400"
      >
        Tags
      </p>
      <Card>
        <div
          className="
            h-[15.25rem]
            w-[18.5rem]"
        >
          <div
            className="
              p-[1.5rem]"
          >
            <Search
              id="tagViewSearchId"
              placeholder="Search tag"
              searchTerm={tagSearchTerm}
              onSearch={onSearch}
            />
          </div>
          <div
            className="
              scrollbar
              flex
              h-[8.8rem]
              w-[17rem]
              flex-col
              gap-[1.125rem]
              overflow-y-scroll
              px-[1.5rem]
              pt-[0.35rem]
              pb-[0.8125rem]"
          >
            <Checkbox
              id="tagViewCheckboxIdAll"
              key="tagViewCheckboxKeyAll"
              name="tagViewCheckboxNameAll"
              checked={tagFilter.includes("All")}
              onChange={() => onChangeCheckbox("All")}
            >
              <p
                className="
                  text-custom-black-600
                  text-start
                  text-sm
                  dark:text-gray-400"
              >
                All
              </p>
            </Checkbox>
            {tags.map(
              (tag: Countable) => (
                <Checkbox
                  id={`tagViewCheckboxId${tag.name}`}
                  key={`tagViewCheckboxKey${tag.name}`}
                  name={`tagViewCheckboxName${tag.name}`}
                  checked={
                    tagFilter.includes("All")
                    || tagFilter.includes(tag.name)
                  }
                  onChange={() => onChangeCheckbox(tag.name)}
                >
                  <p
                    className="
                      text-custom-black-600
                      text-start
                      text-sm
                      dark:text-gray-400"
                  >
                    {tag.name}
                    <span
                      className="
                        text-custom-black-300
                        ml-1
                        text-sm
                        dark:text-gray-500"
                    >
                      (
                      {tag.count}
                      )
                    </span>
                  </p>
                </Checkbox>
              ),
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TagView;
