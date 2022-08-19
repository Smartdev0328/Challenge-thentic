import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";

const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}
// 56  BSC
// 1   Ethereum

const INIT_STATE = {
    Loading: true,
};


export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <BlockchainContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </BlockchainContext.Provider>
    );
}