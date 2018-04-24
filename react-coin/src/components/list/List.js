import React from "react";
import { handleResponse } from "../../helpers";
import { API_URL } from "../../config";
import Loading from "../common/Loading";
import Table from "./Table";
import Pagination from "./Pagination";

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1,
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    this.setState({ loading: true });

    const { page } = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then(data => {
        const { currencies, totalPages } = data;

        this.setState({
          currencies,
          totalPages,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false
        });
        console.log("Error", error);
      });
  }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;

    nextPage = direction === 'next'? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      this.fetchCurrencies();
    });
  }

  render() {
    const {loading, error, currencies, page, totalPages} = this.state;

    //only render loading component when loading is set to true
    if (loading) {
      return <div className="Loading-container"><Loading /></div>;
    }

    //only render error message if error was occured while fetching data
    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <div>
        <Table
            currencies={currencies}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;
