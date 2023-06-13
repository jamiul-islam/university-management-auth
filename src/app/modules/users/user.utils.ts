import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  const incrementedOldID = (parseInt(currentId) + 1)
    .toString()
    .padStart(5, '0');

  const incrementedID = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedOldID}`;

  return incrementedID;
};

export const lastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(1) : undefined;
};

export const generateFacultyId = async () => {
  const currentId = (await lastFacultyId()) || (0).toString().padStart(5, '0');
  const incrementedOldID = (parseInt(currentId) + 1)
    .toString()
    .padStart(5, '0');
  const incrementedID = `F${incrementedOldID}`;
  return incrementedID;
};
