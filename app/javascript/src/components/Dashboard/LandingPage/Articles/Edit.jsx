import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import { useParams } from "react-router-dom";

import articlesApi from "apis/articles";
import { LANDING_PAGE_PATH } from "components/routeConstants";

import Form from "./Form";

const Edit = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [articleDetails, setArticleDetails] = useState({});
  const { slug } = useParams();

  const handleSubmit = async articleDetails => {
    try {
      await articlesApi.update({
        slug,
        payload: {
          title: articleDetails.title,
          body: articleDetails.body,
          status: articleDetails.status,
        },
      });
      history.push(LANDING_PAGE_PATH);
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchArticleDetails = async () => {
    try {
      const {
        data: { article },
      } = await articlesApi.show(slug);
      setArticleDetails(article);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="h-1/2 mx-auto mt-12 flex w-1/2">
      <Form article={articleDetails} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Edit;