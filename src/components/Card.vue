<template>
    <div class="bg-white p-8 rounded-xl flex flex-col w-full max-w-[600px] gap-y-8">
        <div class="flex gap-8">
            <img src="/src/assets/images/icon-star.svg" alt="star" class="w-[2.5rem] aspect-square"/>
            <h1 class="app-text-display">FAQs</h1>
        </div>
        <main class="flex flex-col gap-8">
            <div v-for="(faq,key) in faqs" :key class="grid duration-500 transition-[grid-template-rows] grid-rows-[auto_0fr] has-[:checked]:grid-rows-[auto_1fr] gap-y-4">
                <label class="app-text-title flex items-center cursor-pointer group hover:text-app-pink">
                    <input type="radio" :value="key" v-model="picked" class="appearance-none">{{ faq.question }} 
                    <div class="grid grid-cols-1 grid-rows-1 ml-auto shrink-0">
                        <img class="row-span-full col-span-full group-has-[:checked]:opacity-0 duration-500 transition-opacity" src="/src/assets/images/icon-plus.svg" alt="icon plus">
                        <img class="row-span-full col-span-full opacity-0 group-has-[:checked]:opacity-100 duration-500 transition-opacity" src="/src/assets/images/icon-minus.svg" alt="icon minus">
                    </div>  
                </label>
                <p class="app-text-body text-app-pale-purple overflow-y-hidden">{{ faq.answer }}</p>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const faqs = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        question: "How can I get help if I'm stuck on a challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]
const picked= ref(0)
</script>