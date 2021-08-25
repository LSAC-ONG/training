<html>

<head>


</head>


<body>

<form method="POST" action="<?php echo e(route('submitForm')); ?>">
    <?php echo csrf_field(); ?>
    <label> Name</label>
    <input type="text" name="name" value="<?php echo e(old('name')); ?>">
    <?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
        <p style="color:red">Acest camp este obligatoriu</p>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
    <br>
    <label>Body</label>
    <textarea name="body"><?php echo e(old('body')); ?></textarea>
    <?php $__errorArgs = ['body'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
    <p style="color:red">Acest camp este obligatoriu</p>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
    <br>
    <label>Slug</label>
    <input type="text" name="slug" value="<?php echo e(old('slug')); ?>">
    <?php $__errorArgs = ['slug'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
    <p style="color:red">Acest camp este obligatoriu</p>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
    <br>
    <input type="submit" value="Submit">
</form>


</body>

</html>
<?php /**PATH /home/dumi/Documents/Lara/training/resources/views/files/form.blade.php ENDPATH**/ ?>