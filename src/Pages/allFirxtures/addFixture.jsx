import { Box, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
const initData = {
  status: "",
  email: "",
};
export default function AddFixture() {
  const saveHandler = (values, cb) => {
    alert("Working...");
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      // validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        saveHandler(values, () => {
          resetForm(initData);
        });
      }}
    >
      {({ setFieldValue, values, errors, touched, handleSubmit }) => (
        <>
          {false && <div>Loading...</div>}
          <Form>
            <Box sx={{ margin: "20px" }}>
              <TextField
                id="standard-basic"
                label="Match Status"
                variant="standard"
                onChange={(e)=>{
                    setFieldValue("status")
                }}
              />
            </Box>
          </Form>
        </>
      )}
    </Formik>
  );
}
