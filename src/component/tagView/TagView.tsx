import React, { useEffect } from "react";
import {
  findTagsFetch,
  useAppDispatch,
  useAppSelector,
} from "../../service";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./tagView.scss";

const TagView: React.FC = () => {
  const tags = useAppSelector((state) => state.tags.tags);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findTagsFetch());
  }, [dispatch]);

  const onSearch = (searchTerm: string):void => {
    console.log("searchTerm: ", searchTerm);
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
              onSearch={onSearch}
            />
          </div>
          <div className="tag-view__tags">
            <Checkbox
              id="tagViewCheckboxIdAll"
              key="tagViewCheckboxKeyAll"
              name="tagViewCheckboxNameAll"
              text="All"
            />
            {tags.map(
              (tag: string) => (
                <Checkbox
                  id={`tagViewCheckboxId${tag}`}
                  key={`tagViewCheckboxKey${tag}`}
                  name={`tagViewCheckboxName${tag}`}
                  text={tag}
                />
              ),
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TagView;
