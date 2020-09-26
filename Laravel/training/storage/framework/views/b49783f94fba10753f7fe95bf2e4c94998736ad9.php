<html>

<head>
</head>


<body>

<ul>
    Lista cu postari:

    <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li><?php echo e($post->name); ?></li>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ul>

</body>

</html>
<?php /**PATH /home/dumi/Documents/Lara/training/resources/views/posts/lists.blade.php ENDPATH**/ ?>