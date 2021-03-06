import React from 'react';
import { connect } from 'react-redux';

import { get, actions } from '../../store';

const LocaleSelector = props => {
    let handleChange = e => {
        props.setLocale(e.target.value);
    };

    if (!props.standalone) {
        return null;
    }

    return (
        <select
            className="pull-right form-control locale-selector"
            onChange={handleChange}
            defaultValue={props.currentLocale}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
        </select>
    );
};

export default connect(
    state => {
        return {
            standalone: get.boolSetting(state, 'standalone-mode'),
            currentLocale: get.setting(state, 'locale')
        };
    },
    dispatch => {
        return {
            setLocale: locale => actions.setSetting(dispatch, 'locale', locale)
        };
    }
)(LocaleSelector);
