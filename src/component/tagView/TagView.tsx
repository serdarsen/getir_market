import { FC } from "react";
import {
  appendTagFilter,
  removeTagFilter,
  selectProduct,
  setTagSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import Countable from "../../model/Countable";
import { useTagsQuery } from "../../service";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./tagView.scss";

const TagView: FC = () => {
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
    <div className="tag-view">
      <p className="tag-view__title">Tags</p>
      <Card>
        <div className="tag-view__body">
          <div className="tag-view__search">
            <Search
              id="tagViewSearchId"
              placeholder="Search tag"
              searchTerm={tagSearchTerm}
              onSearch={onSearch}
            />
          </div>
          <div className="tag-view__tags">
            <Checkbox
              id="tagViewCheckboxIdAll"
              key="tagViewCheckboxKeyAll"
              name="tagViewCheckboxNameAll"
              checked={tagFilter.includes("All")}
              onChange={() => onChangeCheckbox("All")}
            >
              <p className="tag-view__text">All</p>
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
                  <p className="tag-view__text">
                    {tag.name}
                    <span className="tag-view__count">
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
