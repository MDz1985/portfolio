import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type ModalState = {
  data: any | null;
};

const initialState: ModalState = {
  data: null,
};

export const ModalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
      setData(data: any | null = null) {
        patchState(store, () => ({ data }));
      },
    })
  )
);
