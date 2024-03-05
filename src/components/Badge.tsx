import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export function Gold() {
    return (
        <span title="Proficient">
            <FontAwesomeIcon icon={faTrophy} style={{
                color: 'gold'
            }} />
        </span>
    );
}

export function Silver() {
    return (
        <span title="Competent">
            <FontAwesomeIcon icon={faTrophy} style={{
                color: 'silver'
            }} />
        </span>
    );
}

export function Bronze() {
    return (
        <span title="Familiar">
            <FontAwesomeIcon icon={faTrophy} style={{
                color: 'rgb(205, 127, 50)'
            }} />
        </span>
    );
}
