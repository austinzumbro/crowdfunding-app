const router = require('express').Router();
const { Project, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll();

        const projects = projectData.map((project) => project.get({ plain: true }));

        res.render('homepage', { projects: projects });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/project/:id', (req, res) => )

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

module.exports = router;
