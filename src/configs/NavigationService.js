import { NavigationActions, DrawerActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(ref) {
    _navigator = ref;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function back() {
    _navigator.dispatch(NavigationActions.back());
}

function popToTop(immediate = true) {
    _navigator.dispatch({
        type: NavigationActions.POP_TO_TOP,
        immediate
    });
}

function reset(routeName, params) {
    _navigator.dispatch({
        type: NavigationActions.RESET,
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({
                routeName,
                params
            })
        ]
    });
}

function closeDrawer() {
    _navigator.dispatch(
        DrawerActions.closeDrawer()
    );
}

function toggleDrawer() {
    _navigator.dispatch(
        DrawerActions.toggleDrawer()
    );
}

export const NavigationService = {
    setTopLevelNavigator,
    navigate,
    back,
    popToTop,
    reset,
    closeDrawer,
    toggleDrawer,
    navigator: _navigator
};