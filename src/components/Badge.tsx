import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from "@fortawesome/fontawesome-svg-core";

const Gold = memo(() => {
    return (
        <span title="Advanced">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} color="gold" fixedWidth />
        </span>
    );
});

const Silver = memo(() => {
    return (
        <span title="Intermediate">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} color="silver" fixedWidth />
        </span>
    );
});

const Bronze = memo(() => {
    return (
        <span title="Beginner">
            <FontAwesomeIcon icon={"fa fa-trophy" as IconName} color="#cd7f32" fixedWidth />
        </span>
    );
});

export { Gold, Silver, Bronze };
