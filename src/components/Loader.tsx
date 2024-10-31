import { Skeleton } from 'antd';
const heightWindows = window.innerHeight;
const header = 80;
const footer = 80;
const heightSkeleton = 80;
const countSkeletons = Math.floor((heightWindows - header - footer) / heightSkeleton);

const Loader = () => {
  const skeletons = Array.from({ length: countSkeletons }, (_, index) => (
    <div key={index}>
      <Skeleton
        active
        avatar
        paragraph={{ rows: 1 }}
      />
    </div>
  ));
  return(
    <>{skeletons}</>
  );
}

export default Loader;
