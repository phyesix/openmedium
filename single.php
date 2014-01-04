<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<div class="featured-image">
		<div class="featured-img" style="background-image: url(<?php $src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), false, ''); echo $src[0]; ?>)"></div>
	</div>
	<div class="group-and-comment">
	<div class="page-wrap">
		<div class="group">
			<div class="bio-and-post-group">	
				<div class="bio">
					<div class="author-picture"><?php echo get_avatar( get_the_author_meta( 'ID' ),73 ); ?></div>
					<div class="author-name"><?php the_author_posts_link(); ?></div>
					<div class="author-bio"><?php the_author_meta('description') ?></div>
					<div class="post-date"><?php echo (get_the_modified_time() !== get_the_time())?"Güncellendi ".get_the_modified_time('d/m/Y'):"".get_the_time('d/m/Y')." tarihinde yazılmıştır." ?></div>
				</div>
				
				<div <?php post_class('index-box') ?> id="post-<?php the_ID(); ?>">
					<?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>
					<h1 class="post-title"><?php the_title(); ?></h1>
					<div class="post-content">
						<?php the_content(); ?>
					</div>
					<div class="post-meta-data">
						<?php the_tags('Etiketler: ', ', ', '<br />'); ?>
					</div>
					
					<div class="post-socialarea clearfix">
						<div class="post-social-like">
							<?php if( function_exists('dot_irecommendthis') ) dot_irecommendthis(); ?>
						</div>
						<div class="post-social-share">
							<a rel="external nofollow" class="ss-twitter" href="https://twitter.com/intent/tweet/?text=<?php the_title(); ?>&url=<?php the_permalink() ?><?php {  echo '&via=phyesix'; } ?>" target="_blank"><span class="ss-icon-twitter"></span><?php echo $twitter_text; ?></a>
							<a rel="external nofollow" class="ss-facebook" href="https://www.facebook.com/sharer/sharer.php?s=100&p[url]=<?php the_permalink() ?>&p[images][0]=&p[title]=<?php the_title(); ?>" target="_blank" ><span class="ss-icon-facebook"></span><?php echo $facebook_text; ?></a>
							<a rel="external nofollow" class="ss-googleplus" href="https://plus.google.com/share?url=<?php the_permalink() ?>" target="_blank" ><span class="ss-icon-googleplus"></span><?php echo $googleplus_text; ?></a>
						</div>
					</div>
					
					<div class="">
						<?php comments_template(); ?>
					</div>
				</div>
				
				

				

			<?php endwhile; endif; ?>    

			<?php get_footer(); ?>