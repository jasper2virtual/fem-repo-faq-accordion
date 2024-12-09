<template>
    <div class="bg-white p-8 rounded-xl flex flex-col w-full max-w-[600px]">
        <div class="flex gap-8">
            <img src="/src/assets/images/icon-star.svg" alt="star" class="w-[2.5rem] aspect-square"/>
            <span class="app-text-display">FAQs</span>
        </div>
        <div class="flex flex-col gap-8">
            <div v-for="(faq,key) in faqs" :key class="flex flex-col gap-8">
                <div class="flex justify-between items-center">
                    <label class="app-text-title"><input type="radio" :value="key" v-model="picked" />{{ faq.question }}</label>
                </div>
                <p class="app-text-body text-app-pale-purple">{{ faq.answer }}</p>
            </div>
        </div>
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
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]
const picked= ref(0)
</script>