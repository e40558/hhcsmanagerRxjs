export interface Course {
    id: number;
    seqNo:number;
    url:string;
    iconUrl: string;
    courseListIcon: string;
    title: string;
    longDescription?: string;
    category: string;
    lessonsCount: number;
    promo: boolean;
   
  }


  

export function sortCoursesBySeqNo(c1: Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}