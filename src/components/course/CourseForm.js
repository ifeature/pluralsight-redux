import React, { PropTypes } from 'react';
import TextInput from '../common/TextInout';
import SelectInput from '../common/SelectInput';

function CourseForm({ course, onChange, errors }) {
    return (
        <form>
            <h1>Manage Couse</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;