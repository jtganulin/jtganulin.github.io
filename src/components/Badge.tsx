import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from "@fortawesome/fontawesome-svg-core";

export function Gold() {
    return (
        <span title="Proficient">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'gold'
            }} />
        </span>
    );
}

export function Silver() {
    return (
        <span title="Competent">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'silver'
            }} />
        </span>
    );
}

export function Bronze() {
    return (
        <span title="Familiar">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'rgb(205, 127, 50)'
            }} />
        </span>
    );
}
