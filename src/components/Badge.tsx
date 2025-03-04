import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from "@fortawesome/fontawesome-svg-core";

const Gold = memo(() => {
    return (
        <span title="Advanced">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'gold'
            }} />
        </span>
    );
});

const Silver = memo(() => {
    return (
        <span title="Intermediate">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'silver'
            }} />
        </span>
    );
});

const Bronze = memo(() => {
    return (
        <span title="Beginner">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} style={{
                color: 'rgb(205, 127, 50)'
            }} />
        </span>
    );
});

export { Gold, Silver, Bronze };
