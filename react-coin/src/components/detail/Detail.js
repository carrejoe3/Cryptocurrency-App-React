import React from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import { handleResponse, renderChangePercent } from '../../helpers';
import './Detail.css';
import favIcon from '../common/favourites.png';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        console.log('Component has been mounted', this.props);

        const currencyId = this.props.match.params.id;

        this.fetchCurrency(currencyId);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.location.pathname !== nextProps.location.pathname) {
            // Get new currency id from url
            const newCurrencyId = nextProps.match.params.id;

            this.fetchCurrency(newCurrencyId);
        }
    }

    favouriteToggle(id) {
        // Return favourites from local storage, or return empty array if it doesnt exist
        let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
        // If already favourited, remove from array
        if (favourites.includes(id)) {
            let index = favourites.indexOf(id);
            if (index !== -1) {
                favourites.splice(index, 1);
            }
        } else {
            // Add new id to array
            favourites.push(id);
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    fetchCurrency(currencyId) {
        this.setState({ loading: true });

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                this.setState({
                    loading: false,
                    error: null,
                    currency: currency,
                });
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage,
                });
            });
    }

    render() {
        const { loading, error, currency } = this.state;

        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }

        if(error) {
            return <div className="error">{error}</div>
        }

        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>

                <div className="Detail-container">
                    <div className="Detail-item">
                          Price <span className="Detail-value">$ {currency.price}</span>
                    </div>
                    <div className="Detail-item">
                          Rank <span className="Detail-value">{currency.rank}</span>
                    </div>
                    <div className="Detail-item">
                          24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>
                    </div>
                    <div className="Detail-item">
                          <span className="Detail-title">Market cap</span>
                          <span className="Detail-dollar">$</span>
                          {currency.marketCap}
                    </div>
                    <div className="Detail-item">
                          <span className="Detail-title">24H Volume</span>
                          <span className="Detail-dollar">$</span>
                          {currency.volume24h}
                    </div>
                    <div className="Detail-item">
                          <span className="Detail-title">Total supply</span>
                          {currency.totalSupply}
                    </div>
                    <div className="Detail-item alignLeft">
                          <img className="favIcon" alt="Favourite" src={favIcon} onClick={() => this.favouriteToggle(currency.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;