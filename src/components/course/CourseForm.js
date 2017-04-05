import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

function CourseForm({ course, allAuthors, onSave, onChange, saving, errors }) {
    console.log(React.createElement('h1', null, React.createElement('span', null, 'Bye')));
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={course.category}
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={course.length}
            />
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;
