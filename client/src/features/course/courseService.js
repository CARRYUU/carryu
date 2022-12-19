import * as api from "../api";
import { toast } from "react-toastify";

const createNewCourse = async (courseData, thunkAPI) => {
  try {
    const { response } = await api.createNewCourse(courseData);

    if (!response.data) {
      console.log("No data returned from getCoursesByTitle API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course created successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "createNewCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const updateCourseInfo = async (courseData, thunkAPI) => {
  try {
    const { response } = await api.updateCourseInfo(courseData);

    if (!response.data) {
      console.log("No data returned from updateCourseInfo API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course updated successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "updateCourseInfoError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const getCourseInfoById = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseInfoById(id);

    if (!response.data) {
      console.log("No data returned from getCourseInfoById API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseInfoByIdError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseContentById = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseContentById(id);

    if (!response.data) {
      console.log("No data returned from getCourseContentById API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseContentByIdError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getARandomCourse = async (thunkAPI) => {
  try {
    const response = await api.getARandomCourse();

    if (!response.data) {
      console.log("No data returned from getARandomCourse API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getARandomCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const addCourseComment = async (commentData, thunkAPI) => {
  try {
    const response = await api.addCourseComment(commentData);

    if (!response.data) {
      console.log("No data returned from addCourseComment API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addCourseCommentError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const getCourseAllComments = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseAllComments(id);

    if (!response.data) {
      console.log("No data returned from getCourseAllComments API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseAllCommentsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const addCourseTA = async (taData, thunkAPI) => {
  try {
    const response = await api.addCourseTA(taData);

    if (!response.data) {
      console.log("No data returned from addCourseTA API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addCourseTAError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const removeCourseTA = async (taData, thunkAPI) => {
  try {
    const response = await api.removeCourseTA(taData);

    if (!response.data) {
      console.log("No data returned from removeCourseTA API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "removeCourseTAError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseTAs = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseTAs(id);

    if (!response.data) {
      console.log("No data returned from getCourseTAs API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseTAsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const addStudentToCourse = async (studentData, thunkAPI) => {
  try {
    const response = await api.addStudentToCourse(studentData);

    if (!response.data) {
      console.log("No data returned from addStudentToCourse API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addStudentToCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const removeStudentFromCourse = async (studentData, thunkAPI) => {
  try {
    const response = await api.removeStudentFromCourse(studentData);

    if (!response.data) {
      console.log("No data returned from removeStudentFromCourse API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "removeStudentFromCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseStudents = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseStudents(id);

    if (!response.data) {
      console.log("No data returned from getCourseStudents API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseStudentsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const courseServices = {
  createNewCourse,
  updateCourseInfo,
  getCourseInfoById,
  getCourseContentById,
  getARandomCourse,
  addCourseComment,
  getCourseAllComments,
  addCourseTA,
  removeCourseTA,
  getCourseTAs,
  addStudentToCourse,
  removeStudentFromCourse,
  getCourseStudents,
};

export default courseServices;