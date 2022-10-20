import React, { useEffect } from "react";
import algoliasearch from "algoliasearch";
import {
  Configure,
  InstantSearch,
  connectHits,
  connectSearchBox,
} from "react-instantsearch-dom";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AllQuery, buildImage, client } from "../constants";
import builder from "@sanity/image-url";

function Search({ hide }) {
  const navigate = useNavigate();
  const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APPID,
    import.meta.env.VITE_ALGOLIA_SEARCHKEY
  );
  const index = searchClient.initIndex("products");
  const adminIndex = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APPID,
    import.meta.env.VITE_ALGOLIA_ADMINKEY
  ).initIndex("products");
  adminIndex.setSettings({
    distinct: 1,
  });
  useEffect(()=>{
    client.fetch(AllQuery,{})
         .then((data) =>{
          console.log(data)
          adminIndex.clearObjects();
          return adminIndex.saveObjects(data, {
              autoGenerateObjectIDIfNotExist: true
            })
         }).catch(err =>{
          console.log('Error:',err);
         })
  },[])
  const SearchBox = ({ currentRefinement, refine }) => (
    <input
      type="search"
      value={currentRefinement}
      placeholder="Type in here..."
      className="border indent-4 m-2 w-9/12 text-xl focus:outline-blue-400 rounded-md h-[5vh]"
      onChange={event => refine(event.currentTarget.value)}
    />
  );
  const MySearchBox = connectSearchBox(SearchBox);
  const Hits = ({ hits }) => (
    <ol className="border-2">
      {hits.length !== 0 &&
        hits.map(hit => (
          <div
            key={Math.random().toString().concat(hit._id)}
            className="border-b flex border-blue-500 bg-white min-h-[5vh] cursor-pointer"
            onClick={() => {
              navigate(`/product/${hit._id}`);
              window.location.reload();
            }}
          >
            <img src={buildImage(hit.productImage.asset._ref)} className='h-[5vh] w-12 rounded-md' alt="" />
            <div>
              <p className="text-lg">{hit.productName}</p>
              <p className="text-xs">${hit.productPrice}</p>
              <p className="text-xs">{hit.reason}</p>
            </div>
          </div>
        ))}
      {hits.length == 0 && <p>No results found</p>}
    </ol>
  );
  const CustomHits = connectHits(Hits);
  return (
    <div className="sm:h-[75vh] sm:w-9/12  border-blue-500 m-auto rounded-md bg-white  border bg-opacity-90">
      <MdClose
        className="w-1/12 m-2 h-10 border rounded-full float-right"
        onClick={() => hide()}
      />
      <InstantSearch indexName={index.indexName} searchClient={searchClient}>
        <h1 className="w-full">
          <MySearchBox />
        </h1>
        <Configure hitsPerPage={4} enablePersonalization={false} distinct />
        <CustomHits />
      </InstantSearch>
    </div>
  );
}

export default Search;
