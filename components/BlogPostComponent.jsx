import React from 'react'
import styles from './BlogPostComponent.module.css';
import Image from 'next/image';
import UserAvatarComponent from './UserAvatarComponent/UserAvatarComponent';
import PropTypes from 'prop-types';
import moment from 'moment';

function BlogPostComponent({ blogPostImageUrl, blogPostTitle,
   blogPostContent,blogPostDate, creatorImageUrl, creatorFullName, 
  }) {
  return (
    <div className={styles.blogPostContainer}>
      <div className={styles.imageContainer}>
        <Image src={blogPostImageUrl} height={342} width={684} alt="blog post photo"></Image>
      </div>
      <div className={styles.titleContainer}>
        <h3>{blogPostTitle}</h3>
        <div className={styles.dateTimeWrapper}>
         {moment(blogPostDate).format("MMMM d, YYYY")}
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p>{blogPostContent}</p>
      </div>
      <div className={styles.userCreatorContainer}>
        <UserAvatarComponent userAvatarUrl={creatorImageUrl} userName={creatorFullName} />
      </div>
    </div>
  )
}


export default BlogPostComponent;

BlogPostComponent.defaultProps = {
  blogPostImageUrl: '/pic.jpg',
  blogPostTitle: 'blog post title about server side rendering',
  blogPostContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?',
  blogPostDate: new Date(),
  creatorImageUrl: '',
  creatorFullName: '',
}
BlogPostComponent.propTypes = {
  blogPostImageUrl: PropTypes.string,
  blogPostTitle: PropTypes.string,
  blogPostContent: PropTypes.string,
  blogPostDate: PropTypes.string,
  creatorImageUrl: PropTypes.string,
  creatorFullName: PropTypes.string,
}