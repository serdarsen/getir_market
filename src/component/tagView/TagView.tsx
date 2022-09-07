import React, { useEffect } from "react";
import {
  findTagsFetch,
  useAppDispatch,
  useAppSelector,
} from "../../service";
import Card from "../card/Card";
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
          <Search
            id="tagViewSearchId"
            placeholder="Search tag"
            onSearch={onSearch}
          />
        </div>
      </Card>
    </div>
  );
};

export default TagView;
