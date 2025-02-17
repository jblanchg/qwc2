/**
 * Copyright 2017-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ReducerIndex from '../reducers/index';
import selectionReducer from '../reducers/selection';
ReducerIndex.register("selection", selectionReducer);

export const CHANGE_SELECTION_STATE = 'CHANGE_SELECTION_STATE';

export function changeSelectionState(selectionState) {
    return {
        type: CHANGE_SELECTION_STATE,
        geomType: selectionState.geomType,
        active: selectionState.active,
        measure: selectionState.measure,
        box: selectionState.box,
        circle: selectionState.circle,
        point: selectionState.point,
        line: selectionState.line,
        polygon: selectionState.polygon,
        style: selectionState.style,
        styleOptions: selectionState.styleOptions,
        cursor: selectionState.cursor,
        reset: selectionState.reset
    };
}
