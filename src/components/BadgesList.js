import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css';
import './styles/BadgesList.css';
class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img
                    className="BadgesListItem__avatar"
                    src={this.props.badge.avatarUrl}
                    alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredbadges] = React.useState(badges);

    //use memo evita el recalculo,
    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })
        setFilteredbadges(result);
    }, [badges, query])//si badges y query cambian , vuelve a clacular

    return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
    const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);

    if (filteredBadges.length == 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control" value={query} onChange={(e) => {
                        setQuery(e.target.value);

                    }} />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgeList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control" value={query} onChange={(e) => {
                    setQuery(e.target.value);

                }} />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default BadgesList;