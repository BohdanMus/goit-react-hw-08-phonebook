import {
  addContact,
  deleteContact,
  fetchContacts,
  editContact,
} from './contactsOperations';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  return { ...state, isLoading: true };
};

const handleRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(editContact.pending, handlePending)

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(addContact.fulfilled, handleAddContactSuccess)
      .addCase(deleteContact.fulfilled, handleDeleteContactSuccess)
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
